
<template>
  <Icon :iconName="'taxi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaxiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'taxi'
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
