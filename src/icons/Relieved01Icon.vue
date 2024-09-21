
<template>
  <Icon :iconName="'relieved-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Relieved01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'relieved-01'
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
