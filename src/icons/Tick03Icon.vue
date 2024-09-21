
<template>
  <Icon :iconName="'tick-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tick03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tick-03'
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
