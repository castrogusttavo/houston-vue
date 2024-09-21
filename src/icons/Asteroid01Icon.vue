
<template>
  <Icon :iconName="'asteroid-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Asteroid01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'asteroid-01'
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
