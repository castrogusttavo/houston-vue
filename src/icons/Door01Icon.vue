
<template>
  <Icon :iconName="'door-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Door01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'door-01'
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
