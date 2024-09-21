
<template>
  <Icon :iconName="'digg'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiggIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'digg'
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
