
<template>
  <Icon :iconName="'body-part-six-pack'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BodyPartSixPackIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'body-part-six-pack'
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
