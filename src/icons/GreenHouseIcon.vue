
<template>
  <Icon :iconName="'green-house'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GreenHouseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'green-house'
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
