
<template>
  <Icon :iconName="'play-list-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayListMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-list-minus'
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
