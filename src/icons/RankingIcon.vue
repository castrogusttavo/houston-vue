
<template>
  <Icon :iconName="'ranking'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RankingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ranking'
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
