
<template>
  <Icon :iconName="'work-update'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorkUpdateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'work-update'
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
