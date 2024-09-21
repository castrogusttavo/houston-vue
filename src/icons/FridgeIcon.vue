
<template>
  <Icon :iconName="'fridge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FridgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fridge'
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
