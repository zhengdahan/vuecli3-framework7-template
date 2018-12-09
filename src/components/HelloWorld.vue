<template>
  <div class="hello">
    <f7-page>
      <f7-accordion>
        <!-- Item 1 -->
        <f7-accordion-item>
          <f7-accordion-toggle>Item 1</f7-accordion-toggle>
          <f7-accordion-content>Item 1 content...</f7-accordion-content>
        </f7-accordion-item>
        <!-- Item 2 -->
        <f7-accordion-item>
          <f7-accordion-toggle>Item 2</f7-accordion-toggle>
          <f7-accordion-content>Item 2 content...</f7-accordion-content>
        </f7-accordion-item>
      </f7-accordion>
    </f7-page>
  </div>
</template>

<script>
import {
  f7Page,
  f7Accordion,
  f7AccordionItem,
  f7AccordionToggle,
  f7AccordionContent
} from "framework7-vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    f7Page,
    f7Accordion,
    f7AccordionItem,
    f7AccordionToggle,
    f7AccordionContent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
