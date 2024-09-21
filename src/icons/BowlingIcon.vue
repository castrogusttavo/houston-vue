
<template>
  <Icon :iconName="'bowling'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BowlingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bowling'
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
