
<template>
  <Icon :iconName="'investigation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InvestigationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'investigation'
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
