
<template>
  <Icon :iconName="'danger'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DangerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'danger'
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
