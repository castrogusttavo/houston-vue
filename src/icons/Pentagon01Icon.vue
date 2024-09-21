
<template>
  <Icon :iconName="'pentagon-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pentagon01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pentagon-01'
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
