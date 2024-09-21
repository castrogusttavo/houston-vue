
<template>
  <Icon :iconName="'hotel-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hotel01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hotel-01'
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
