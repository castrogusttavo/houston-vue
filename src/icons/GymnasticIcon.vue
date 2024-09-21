
<template>
  <Icon :iconName="'gymnastic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GymnasticIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gymnastic'
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
