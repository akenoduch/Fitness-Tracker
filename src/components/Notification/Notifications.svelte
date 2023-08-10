<script>
  import { LocalNotifications } from "@capacitor/local-notifications";
  import { onMount } from "svelte";

  onMount(async () => {
    console.log("onMount called");
    // Solicitar permissões para notificações locais
    await LocalNotifications.requestPermissions();

    // Verificar se a permissão foi concedida
    const { display } = await LocalNotifications.checkPermissions();
    if (display === "granted") {
      scheduleNotifications();
    } else {
      scheduleNotifications(); // Mesmo se não concedido, agendamos as notificações (ajuste conforme necessário)
    }
    console.log("Permission status:", display);
  });

  function scheduleNotifications() {
    console.log("Scheduling notifications...");
    // Intervalo de 30 minutos para a notificação de pausa
    const breakInterval = 30 * 60 * 1000;
    // Intervalo de 15 minutos para a notificação de água
    const waterInterval = 15 * 60 * 1000;

    // Loop para agendar notificações
    setInterval(() => {
      console.log("Interval called");
      // Obter o horário atual
      const now = new Date();
      const currentTime =
        now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");

      // Obter wakeUpTime e sleepTime do Local Storage
      const wakeUpTime = localStorage.getItem("wakeUpTime").replace(/"/g, "");
      const sleepTime = localStorage.getItem("sleepTime").replace(/"/g, "");

      console.log("Current Time:", currentTime);
      console.log("Wake Up Time:", wakeUpTime);
      console.log("Sleep Time:", sleepTime);

      // Verificar se o horário atual está dentro do intervalo
      if (isTimeInRange(currentTime, wakeUpTime, sleepTime)) {
        // Agendar notificação de pausa
        console.log("Scheduling break notification for 30 minutes from now.");
        LocalNotifications.schedule({
          notifications: [
            {
              title: "Break Time",
              body: "Take a break",
              id: now.getTime(),
              schedule: { at: new Date(Date.now() + breakInterval) },
              sound: null,
              attachments: null,
              actionTypeId: "",
              extra: null,
            },
          ],
        });

        // Agendar notificação de água
        console.log("Scheduling water notification for 15 minutes from now.");
        LocalNotifications.schedule({
          notifications: [
            {
              title: "Water Time",
              body: "Drink some water",
              id: now.getTime() + 1,
              schedule: { at: new Date(Date.now() + waterInterval) },
              sound: null,
              attachments: null,
              actionTypeId: "",
              extra: null,
            },
          ],
        });
      } else {
        console.log("Current time is not in the specified range.");
      }
    }, Math.min(breakInterval, waterInterval)); // Usar o menor intervalo para o loop
  }

  // Função para converter um horário em minutos
  function timeToMinutes(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  // Função para verificar se um horário está dentro de um intervalo
  function isTimeInRange(time, startTime, endTime) {
    const timeInMinutes = timeToMinutes(time);
    const startTimeInMinutes = timeToMinutes(startTime);
    const endTimeInMinutes = timeToMinutes(endTime);

    console.log("Time in minutes:", timeInMinutes);
    console.log("Start Time in minutes:", startTimeInMinutes);
    console.log("End Time in minutes:", endTimeInMinutes);

    return (
      timeInMinutes >= startTimeInMinutes && timeInMinutes <= endTimeInMinutes
    );
  }
</script>
