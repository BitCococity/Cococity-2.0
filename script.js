const claimBtn = document.getElementById("claimBtn");
const message = document.getElementById("message");

const lastClaim = localStorage.getItem("lastClaim");
const today = new Date().toDateString();

if (lastClaim === today) {
  claimBtn.disabled = true;
  message.textContent = "Ya reclamaste tu Bitcococoin hoy. ¡Vuelve mañana! 🌅";
} else {
  claimBtn.addEventListener("click", () => {
    localStorage.setItem("lastClaim", today);
    claimBtn.disabled = true;
    message.textContent = "¡Recompensa diaria reclamada! 🥥💰";
  });
}
<script>
  function handleVerificationSuccess() {
    document.getElementById("claimBtn").disabled = false;
    document.getElementById("message").textContent = "¡Verificado! Ya puedes reclamar tu Bitcococoin 🥥💰";
  }

  function handleVerificationError(error) {
    console.error("Falló la verificación:", error);
    document.getElementById("message").textContent = "Ocurrió un error. Intenta verificar de nuevo.";
  }
</script>
