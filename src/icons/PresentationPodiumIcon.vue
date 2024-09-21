
<template>
  <Icon :iconName="'presentation-podium'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PresentationPodiumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-podium'
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
