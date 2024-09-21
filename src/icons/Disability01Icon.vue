
<template>
  <Icon :iconName="'disability-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Disability01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'disability-01'
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
