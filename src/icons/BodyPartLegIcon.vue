
<template>
  <Icon :iconName="'body-part-leg'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BodyPartLegIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'body-part-leg'
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
