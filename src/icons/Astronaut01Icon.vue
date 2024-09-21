
<template>
  <Icon :iconName="'astronaut-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Astronaut01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'astronaut-01'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
