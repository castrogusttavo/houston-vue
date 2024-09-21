
<template>
  <Icon :iconName="'move'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move'
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
