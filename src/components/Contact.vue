<template>
  <div class="contact-card">
    <h3>Contact </h3>
    <p>Name: Arber Totraku</p>
    <p>E-mail: arbertotraku@spacesquad.com</p>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
$hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px auto;

  border: 1px solid black;
  border-radius: 8px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
width: 3rem;
height: 3rem;
text-align: center;
padding: 150px;
  &:hover {
    box-shadow: $hover-shadow;
  }




  
}
</style>
