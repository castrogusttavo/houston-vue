
<template>
  <Icon :iconName="'humidity'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HumidityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'humidity'
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
