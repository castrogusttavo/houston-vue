
<template>
  <Icon :iconName="'hand-grip'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandGripIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-grip'
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
