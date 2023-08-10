<script>
  import { LocalNotifications } from "@capacitor/local-notifications";
  import { onMount } from "svelte";

  onMount(async () => {
    // Solicitar permissões para notificações locais
    await LocalNotifications.requestPermissions();

    // Verificar se a permissão foi concedida
    const { display } = await LocalNotifications.checkPermissions();
    if (display === "granted") {
      scheduleNotifications();
    } else {
      scheduleNotifications();
    }
  });

  function scheduleNotifications() {
    // Intervalo de 15 minutos para a notificação de água
    const waterInterval = 15 * 60 * 1000;

    setInterval(() => {
      // Obter o horário atual
      const now = new Date();
      const currentTime =
        now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");

      // Obter wakeUpTime e sleepTime do Local Storage
      const wakeUpTime = localStorage.getItem("wakeUpTime").replace(/"/g, "");
      const sleepTime = localStorage.getItem("sleepTime").replace(/"/g, "");

      // Obter remainingWaterIntake do Local Storage
      const waterIntake = Number(localStorage.getItem("waterIntake") || 0);
      const currentWaterConsumed = getWaterDataForToday().currentWaterConsumed;
      const remainingWaterIntake = waterIntake - currentWaterConsumed;

      if (
        isTimeInRange(currentTime, wakeUpTime, sleepTime) &&
        remainingWaterIntake > 0
      ) {
        // Calcular o número de notificações restantes
        const notificationsRemaining =
          (timeToMinutes(sleepTime) - timeToMinutes(currentTime)) /
          (waterInterval / (60 * 1000));

        // Calcular a quantidade sugerida de água para beber
        const suggestedWaterAmount =
          remainingWaterIntake / notificationsRemaining;

        // Agendar notificação de água
        LocalNotifications.schedule({
          notifications: [
            {
              title: "Water Time",
              body: `Drink ${suggestedWaterAmount.toFixed(2)} ml of water`,
              id: now.getTime() + 1,
              schedule: { at: new Date(Date.now() + waterInterval) },
              sound: null,
              attachments: null,
              actionTypeId: "",
              extra: null,
            },
          ],
        });
      }
    }, waterInterval); // Usar o intervalo de água para o loop
  }

  function timeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function isTimeInRange(time, startTime, endTime) {
    const timeInMinutes = timeToMinutes(time);
    const startTimeInMinutes = timeToMinutes(startTime);
    const endTimeInMinutes = timeToMinutes(endTime);
    return (
      timeInMinutes >= startTimeInMinutes && timeInMinutes <= endTimeInMinutes
    );
  }

  function getWaterDataForToday() {
    let waterDataArray =
      JSON.parse(localStorage.getItem("waterDataArray")) || [];
    return (
      waterDataArray.find((item) => item.date === getToday()) || {
        currentWaterConsumed: 0,
      }
    );
  }

  function getToday() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }
</script>
