<template>
  <main id="Home-page">
    <h1>All widgets</h1>
    <div class="widgets">
      <div class="team">
        <h3>Team members:</h3>
        <Team />
      </div>
      <div class="weather" id="wetter">
        <h3>Weather API</h3>
        <Weather />
      </div>

      <div class="todo">
        <h3>List of tasks</h3>
        <Todo />
      </div>
      <div class="location">
        <h3>Address</h3>
        <LocationDisplay />
        <p id="paragraph">S & U Tempelhof, Berlin</p>
      </div>
      <div class="budget">
        <h3>Budget tracker</h3>
        <BudgetTracker />
      </div>
      <div class="contact">
            <h3>Contact</h3>
            <!-- <p>Name: Arber Totraku</p>
    <p>E-mail: arbertotraku@spacesquad.com</p> -->
            <Contact/>
            <span class="span">Name: Arber Totraku</span>
    <span>E-mail: arbertotraku@spacesquad.com</span>
        </div>
    </div>
  </main>
</template>

<script setup>
import Weather from "../components/Weather.vue";
import Team from "../components/Team.vue";
import Todo from "../components/Todo.vue";
import LocationDisplay from "../components/LocationDisplay.vue";
import BudgetTracker from "../components/BudgetTracker.vue";
</script>

<style lang="scss">
#Home-page {

  
  margin-left: 1.5rem;
  padding: 20px;
  text-align: center;
  place-items: left;
  box-sizing: border-box;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .widgets {
    margin-left: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      max-width: 100%;
      overflow-x: hidden;
    }
  }



  .team,
  .weather,
  .todo,
  .location,
  .budget,
  .contact {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    place-items: center;


    h3 {
      margin-top: 0;
      color: #333;
      font-size: 1.25rem;
    }

    #paragraph {
      margin-top: auto;
    }

    .span {
      margin-top: 2rem;
    }
  }
}

</style>
