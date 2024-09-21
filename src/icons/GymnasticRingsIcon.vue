
<template>
  <Icon :iconName="'gymnastic-rings'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GymnasticRingsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gymnastic-rings'
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
