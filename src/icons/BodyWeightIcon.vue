
<template>
  <Icon :iconName="'body-weight'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BodyWeightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'body-weight'
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
