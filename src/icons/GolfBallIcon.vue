
<template>
  <Icon :iconName="'golf-ball'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GolfBallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'golf-ball'
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
