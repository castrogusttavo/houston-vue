
<template>
  <Icon :iconName="'add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Add01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'add-01'
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
