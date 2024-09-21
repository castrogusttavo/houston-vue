
<template>
  <Icon :iconName="'medicine-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medicine01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medicine-01'
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
