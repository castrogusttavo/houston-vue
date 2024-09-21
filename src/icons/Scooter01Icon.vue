
<template>
  <Icon :iconName="'scooter-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Scooter01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scooter-01'
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
