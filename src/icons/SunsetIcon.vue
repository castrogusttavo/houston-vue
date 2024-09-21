
<template>
  <Icon :iconName="'sunset'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunsetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sunset'
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
