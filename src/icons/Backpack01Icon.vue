
<template>
  <Icon :iconName="'backpack-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Backpack01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'backpack-01'
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
