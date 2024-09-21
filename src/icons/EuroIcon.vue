
<template>
  <Icon :iconName="'euro'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EuroIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'euro'
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
