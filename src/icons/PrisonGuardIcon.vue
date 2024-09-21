
<template>
  <Icon :iconName="'prison-guard'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrisonGuardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prison-guard'
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
