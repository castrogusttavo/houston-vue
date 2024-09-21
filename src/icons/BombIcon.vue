
<template>
  <Icon :iconName="'bomb'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BombIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bomb'
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
