
<template>
  <Icon :iconName="'trampoline'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrampolineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trampoline'
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
