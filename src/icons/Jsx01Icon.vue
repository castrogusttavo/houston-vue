
<template>
  <Icon :iconName="'jsx-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Jsx01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jsx-01'
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
