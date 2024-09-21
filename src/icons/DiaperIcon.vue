
<template>
  <Icon :iconName="'diaper'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiaperIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'diaper'
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
