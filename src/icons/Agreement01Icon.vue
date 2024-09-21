
<template>
  <Icon :iconName="'agreement-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Agreement01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'agreement-01'
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
