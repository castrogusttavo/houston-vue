
<template>
  <Icon :iconName="'presentation-online'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PresentationOnlineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-online'
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
