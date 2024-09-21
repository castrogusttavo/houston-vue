
<template>
  <Icon :iconName="'colors'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ColorsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'colors'
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
