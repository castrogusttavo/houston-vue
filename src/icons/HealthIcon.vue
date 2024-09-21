
<template>
  <Icon :iconName="'health'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HealthIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'health'
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
