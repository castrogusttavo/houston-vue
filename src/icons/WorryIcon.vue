
<template>
  <Icon :iconName="'worry'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WorryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'worry'
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
