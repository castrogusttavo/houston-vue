
<template>
  <Icon :iconName="'text-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-check'
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
