
<template>
  <Icon :iconName="'cheese'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheeseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cheese'
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
