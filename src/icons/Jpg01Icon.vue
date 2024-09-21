
<template>
  <Icon :iconName="'jpg-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Jpg01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jpg-01'
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
