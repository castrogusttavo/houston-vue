
<template>
  <Icon :iconName="'yoga-ball'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YogaBallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yoga-ball'
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
